CREATE TABLE `farm` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `rain_history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`farm_id` integer,
	`volume` real,
	`date` text,
	FOREIGN KEY (`farm_id`) REFERENCES `farm`(`id`) ON UPDATE no action ON DELETE no action
);
