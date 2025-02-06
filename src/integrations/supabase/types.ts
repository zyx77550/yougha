export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
      }
      auto_gpt_instances: {
        Row: {
          id: string
          user_id: string
          name: string
          status: string
          config: Json
          last_active: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          status?: string
          config?: Json
          last_active?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          status?: string
          config?: Json
          last_active?: string
          created_at?: string
        }
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
