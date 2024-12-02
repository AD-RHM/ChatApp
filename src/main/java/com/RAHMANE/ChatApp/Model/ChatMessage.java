package com.RAHMANE.ChatApp.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ChatMessage {

    @Getter @Setter
    private String sender;
    @Getter @Setter
    private String content;
    @Getter @Setter
    private MessageType type;
    @Getter @Setter
    private String time;

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }


}
