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
    private String message;
    @Getter @Setter
    private LocalDateTime time;
    @Getter @Setter
    private Status type;

    public ChatMessage() {}


}
