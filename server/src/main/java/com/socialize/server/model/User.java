package com.socialize.server.model;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @OneToMany(mappedBy = "user")
    private List<Post> posts;
    @OneToMany(mappedBy = "userLike")
    private List<Like> likes;
    @Column(name = "createdAt")
    private Timestamp createdAt;
    @Column(name = "updatedAt")
    private Timestamp updatedAt;
    @OneToMany(mappedBy = "follower")
    private List<Follow> followers;
    @OneToMany(mappedBy = "following")
    private List<Follow> following;

    public User() {
    }

    public User(String userName, String email, String password, List<Post> posts, List<Like> likes, Timestamp createdAt, Timestamp updatedAt, List<Follow> followers, List<Follow> following) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.posts = posts;
        this.likes = likes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.followers = followers;
        this.following = following;
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }
}
