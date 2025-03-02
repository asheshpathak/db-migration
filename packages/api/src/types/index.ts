export interface Database {
    id: string;
    name: string;
    type: 'postgresql' | 'mysql' | 'sqlserver' | 'sqlite';
    connectionString?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Table {
    id: string;
    databaseId: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
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
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Migration {
    id: string;
    databaseId: string;
    name: string;
    description?: string;
    sql: string;
    status: 'pending' | 'executed' | 'failed';
    executedAt?: Date;
    executedBy?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface HistoryEvent {
    id: string;
    databaseId: string;
    tableId?: string;
    eventType: 'migration_created' | 'migration_executed' | 'schema_change' | 'schema_drift';
    description: string;
    metadata?: Record<string, any>;
    createdAt: Date;
    createdBy?: string;
  }