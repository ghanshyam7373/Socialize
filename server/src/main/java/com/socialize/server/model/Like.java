package com.socialize.server.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "`Like`")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_id")
    private Long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User userLike;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;
    @Column(name = "createdAt")
    private Timestamp createdAt;

    public Like() {
    }

    public Like(User user, Post post, Timestamp createdAt) {
        this.userLike = user;
        this.post = post;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }
    public User getUser() {
        return userLike;
    }

    public void setUser(User userLike) {
        this.userLike = userLike;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
