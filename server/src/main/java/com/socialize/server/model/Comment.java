package com.socialize.server.model;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
    @Column(name = "content")
    private String content;
    @Column(name = "replyed_on")
    private Long replyedOn;
    @Column(name = "createdAt")
    private Timestamp createdAt;

    public Comment() {
    }

    public Comment(User user, Post post, String content, Long replyedOn, Timestamp createdAt) {
        this.user = user;
        this.post = post;
        this.content = content;
        this.replyedOn = replyedOn;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getReplyedOn() {
        return replyedOn;
    }

    public void setReplyedOn(Long replyedOn) {
        this.replyedOn = replyedOn;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
