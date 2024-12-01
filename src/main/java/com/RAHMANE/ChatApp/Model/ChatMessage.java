package com.RAHMANE.ChatApp.Model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

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
