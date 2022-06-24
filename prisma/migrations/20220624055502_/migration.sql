-- CreateTable
CREATE TABLE `EmotionCategories` (
    `idx` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `group_id` VARCHAR(11) NOT NULL DEFAULT 'none',
    `emotion_name` VARCHAR(100) NULL,
    `description` VARCHAR(300) NULL,
    `thumbnail_image_url` VARCHAR(200) NULL,
    `screen_image_url` VARCHAR(200) NULL,
    `polaroid_image_url` VARCHAR(200) NULL,
    `button_image_url` VARCHAR(200) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmotionUsers` (
    `idx` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `member_client_idx` BIGINT UNSIGNED NOT NULL,
    `last_create_emotion_record_idx` INTEGER NULL,
    `last_played_at` DATETIME(0) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `member_client_idx`(`member_client_idx`),
    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
