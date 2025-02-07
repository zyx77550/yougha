export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_agents: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          status: string | null
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          status?: string | null
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          status?: string | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string
          id: string
          key_type: string
          last_used: string | null
          name: string
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key_type: string
          last_used?: string | null
          name: string
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key_type?: string
          last_used?: string | null
          name?: string
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      auto_gpt_instances: {
        Row: {
          config: Json | null
          created_at: string | null
          id: string
          last_active: string | null
          name: string
          status: string | null
          user_id: string
        }
        Insert: {
          config?: Json | null
          created_at?: string | null
          id?: string
          last_active?: string | null
          name: string
          status?: string | null
          user_id: string
        }
        Update: {
          config?: Json | null
          created_at?: string | null
          id?: string
          last_active?: string | null
          name?: string
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      file_management: {
        Row: {
          created_at: string | null
          file_path: string
          file_type: string | null
          id: string
          last_accessed: string | null
          last_modified: string | null
          size: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          file_path: string
          file_type?: string | null
          id?: string
          last_accessed?: string | null
          last_modified?: string | null
          size?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          file_path?: string
          file_type?: string | null
          id?: string
          last_accessed?: string | null
          last_modified?: string | null
          size?: number | null
          user_id?: string
        }
        Relationships: []
      }
      health_check: {
        Row: {
          id: string
          last_checked: string | null
          status: string
        }
        Insert: {
          id?: string
          last_checked?: string | null
          status?: string
        }
        Update: {
          id?: string
          last_checked?: string | null
          status?: string
        }
        Relationships: []
      }
      merges: {
        Row: {
          created_at: string
          id: string
          project1_id: string
          project2_id: string
          result_url: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          project1_id: string
          project2_id: string
          result_url?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          project1_id?: string
          project2_id?: string
          result_url?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "merges_project1_id_fkey"
            columns: ["project1_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merges_project2_id_fkey"
            columns: ["project2_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          type: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          type?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      process_monitoring: {
        Row: {
          cpu_usage: number | null
          id: string
          last_updated: string | null
          memory_usage: number | null
          process_name: string
          status: string
          user_id: string
        }
        Insert: {
          cpu_usage?: number | null
          id?: string
          last_updated?: string | null
          memory_usage?: number | null
          process_name: string
          status: string
          user_id: string
        }
        Update: {
          cpu_usage?: number | null
          id?: string
          last_updated?: string | null
          memory_usage?: number | null
          process_name?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          branches: number | null
          created_at: string
          description: string | null
          id: string
          language: string | null
          name: string
          repo_url: string
          stars: number | null
          user_id: string
        }
        Insert: {
          branches?: number | null
          created_at?: string
          description?: string | null
          id?: string
          language?: string | null
          name: string
          repo_url: string
          stars?: number | null
          user_id: string
        }
        Update: {
          branches?: number | null
          created_at?: string
          description?: string | null
          id?: string
          language?: string | null
          name?: string
          repo_url?: string
          stars?: number | null
          user_id?: string
        }
        Relationships: []
      }
      system_operations: {
        Row: {
          completed_at: string | null
          created_at: string | null
          details: Json | null
          id: string
          operation_type: string
          path: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          operation_type: string
          path?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          operation_type?: string
          path?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
