import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
  integer,
  date,
  bigint,
  doublePrecision,
  pgEnum,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["client", "editor", "admin"]);
export const statusEnum = pgEnum("status", [
  "brief_pending",
  "in_production",
  "review",
  "revision",
  "delivered",
  "archived",
]);
export const packageTypeEnum = pgEnum("package_type", [
  "short_form",
  "long_form",
  "social_media",
  "graphic_design",
  "strategy",
]);
export const assetTypeEnum = pgEnum("type", [
  "raw_footage",
  "brand_asset",
  "reference",
  "deliverable",
]);
export const notificationTypeEnum = pgEnum("type", [
  "status_change",
  "new_message",
  "file_uploaded",
  "revision_requested",
  "approved",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  role: roleEnum("role").notNull().default("client"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  clientId: uuid("client_id")
    .references(() => users.id)
    .notNull(),
  editorId: uuid("editor_id").references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  platform: text("platform").array(),
  status: statusEnum("status").default("brief_pending"),
  packageType: packageTypeEnum("package_type"),
  revisionLimit: integer("revision_limit").default(2),
  revisionsUsed: integer("revisions_used").default(0),
  deadline: date("deadline"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const briefs = pgTable("briefs", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id")
    .references(() => projects.id)
    .notNull()
    .unique(),
  goals: text("goals"),
  tone: text("tone"),
  references: text("references").array(),
  notes: text("notes"),
  submittedAt: timestamp("submitted_at", { withTimezone: true }),
  completed: boolean("completed").default(false),
});

export const assets = pgTable("assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id),
  uploadedBy: uuid("uploaded_by").references(() => users.id),
  name: text("name").notNull(),
  type: assetTypeEnum("type"),
  r2Key: text("r2_key").notNull(),
  muxAssetId: text("mux_asset_id"),
  muxPlaybackId: text("mux_playback_id"),
  fileSizeBytes: bigint("file_size_bytes", { mode: "number" }),
  mimeType: text("mime_type"),
  isWatermarked: boolean("is_watermarked").default(false),
  approvedAt: timestamp("approved_at", { withTimezone: true }),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const revisionComments = pgTable("revision_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  assetId: uuid("asset_id").references(() => assets.id),
  authorId: uuid("author_id").references(() => users.id),
  timestampSec: doublePrecision("timestamp_sec"),
  body: text("body").notNull(),
  resolved: boolean("resolved").default(false),
  roundNumber: integer("round_number").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const messages = pgTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id),
  senderId: uuid("sender_id").references(() => users.id),
  body: text("body").notNull(),
  internalOnly: boolean("internal_only").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  projectId: uuid("project_id").references(() => projects.id),
  type: notificationTypeEnum("type"),
  read: boolean("read").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
