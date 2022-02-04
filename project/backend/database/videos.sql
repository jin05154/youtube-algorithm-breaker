CREATE TABLE videos (  
    videoID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    video_title VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    channel_name VARCHAR(255) NOT NULL,
    first_category VARCHAR(30) NOT NULL,
    second_category VARCHAR(30),
    playtime INT NOT NULL,
    age VARCHAR(10),
    sex INT,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP
);