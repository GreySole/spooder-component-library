import React, { createContext, useContext, ReactNode, useState, useCallback, useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useTheme } from './ThemeContext';

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  isVisible: boolean;
}

interface ToastContextType {
  toasts: Toast[];
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showWarning: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
  showToast: (message: string, type: ToastType, duration?: number) => void;
  hideToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10%);
  }
`;

// Styled Components
const ToastContainer = styled.div`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
  align-items: center;
`;

const ToastItem = styled.div<{ type: ToastType; isVisible: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  pointer-events: auto;
  min-width: 300px;
  max-width: 500px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease;

  ${(props) => {
    switch (props.type) {
      case ToastType.SUCCESS:
        return css`
          background: #047857;
          outline: 1px solid #047857;
        `;
      case ToastType.ERROR:
        return css`
          background: var(--color-delete);
          outline: 1px solid #b91c1c;
        `;
      case ToastType.WARNING:
        return css`
          background: #047857;
          outline: 1px solid #b45309;
        `;
      case ToastType.INFO:
        return css`
          background: var(--color-background-far);
          outline: 1px solid var(--button-border-color);
        `;
      default:
        return css`
          background: #047857;
          outline: 1px solid #374151;
        `;
    }
  }}
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider(props: ToastProviderProps) {
  const { children } = props;
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { themeConstants } = useTheme();
  const timeoutRefs = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});

  const generateId = () => `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const hideToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, isVisible: false } : toast)),
    );

    // Remove from DOM after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);

    // Clean up timeout
    if (timeoutRefs.current[id]) {
      clearTimeout(timeoutRefs.current[id]);
      delete timeoutRefs.current[id];
    }
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType, duration: number = 4000) => {
      const id = generateId();
      const toast: Toast = {
        id,
        message,
        type,
        duration,
        isVisible: true,
      };

      setToasts((prev) => [...prev, toast]);

      // Auto-hide after duration
      timeoutRefs.current[id] = setTimeout(() => {
        hideToast(id);
      }, duration);
    },
    [hideToast],
  );

  const showSuccess = useCallback(
    (message: string, duration?: number) => {
      showToast(message, ToastType.SUCCESS, duration);
    },
    [showToast],
  );

  const showError = useCallback(
    (message: string, duration?: number) => {
      showToast(message, ToastType.ERROR, duration);
    },
    [showToast],
  );

  const showWarning = useCallback(
    (message: string, duration?: number) => {
      showToast(message, ToastType.WARNING, duration);
    },
    [showToast],
  );

  const showInfo = useCallback(
    (message: string, duration?: number) => {
      showToast(message, ToastType.INFO, duration);
    },
    [showToast],
  );

  const clearAll = useCallback(() => {
    // Clear all timeouts
    Object.values(timeoutRefs.current).forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = {};

    setToasts([]);
  }, []);

  const contextValue: ToastContextType = {
    toasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showToast,
    hideToast,
    clearAll,
  };
  return (
    <ToastContext.Provider value={contextValue}>
      <ToastContainer>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            type={toast.type}
            isVisible={toast.isVisible}
            onClick={() => hideToast(toast.id)}
          >
            {toast.message}
          </ToastItem>
        ))}
      </ToastContainer>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastContext;
