import React from 'react';
import { Badge } from 'ui';

type StatusType = 'synced' | 'changes' | 'pending' | 'complete' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, className }) => {
  const getStatusProps = () => {
    switch (status) {
      case 'synced':
        return {
          variant: 'success' as const,
          defaultLabel: 'Synced',
        };
      case 'changes':
        return {
          variant: 'warning' as const,
          defaultLabel: 'Changes Detected',
        };
      case 'pending':
        return {
          variant: 'info' as const,
          defaultLabel: 'Pending',
        };
      case 'complete':
        return {
          variant: 'success' as const,
          defaultLabel: 'Complete',
        };
      case 'error':
        return {
          variant: 'destructive' as const,
          defaultLabel: 'Error',
        };
      default:
        return {
          variant: 'secondary' as const,
          defaultLabel: 'Unknown',
        };
    }
  };

  const { variant, defaultLabel } = getStatusProps();

  return (
    <Badge variant={variant} className={className}>
      {label || defaultLabel}
    </Badge>
  );
};

export default StatusBadge;
