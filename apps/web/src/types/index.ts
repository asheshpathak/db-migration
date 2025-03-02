export interface Database {
    id: string;
    name: string;
    type: 'postgresql' | 'mysql' | 'sqlserver' | 'sqlite';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Table {
    id: string;
    databaseId: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    columns: Column[];
  }
  
  export interface Column {
    id: string;
    tableId: string;
    name: string;
    type: string;
    isPrimaryKey: boolean;
    isForeignKey: boolean;
    isNullable: boolean;
    defaultValue?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Migration {
    id: string;
    databaseId: string;
    name: string;
    description?: string;
    sql: string;
    status: 'pending' | 'executed' | 'failed';
    executedAt?: string;
    executedBy?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
  }
  
  export interface HistoryEvent {
    id: string;
    databaseId: string;
    tableId?: string;
    eventType: 'migration_created' | 'migration_executed' | 'schema_change' | 'schema_drift';
    description: string;
    metadata?: Record<string, any>;
    createdAt: string;
    createdBy?: string;
  }