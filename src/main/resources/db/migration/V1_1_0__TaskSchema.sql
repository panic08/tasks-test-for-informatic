CREATE TABLE IF NOT EXISTS tasks(
                                    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                                    title VARCHAR(255) NOT NULL,
                                    message TEXT NOT NULL

)