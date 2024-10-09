ALTER TABLE "posts_table" RENAME TO "posts";--> statement-breakpoint
ALTER TABLE "users_table" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_table_email_unique";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");