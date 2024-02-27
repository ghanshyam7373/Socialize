package com.socialize.server.model;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Follow")
public class Follow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id")
    private Long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "follower_id", nullable = false)
    private User follower;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "following_id", nullable = false)
    private User following;
    @Column(name = "createdAt")
    private Timestamp createdAt;

    public Follow() {
    }

    public Follow(User follower, User following, Timestamp createdAt) {
        this.follower = follower;
        this.following = following;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }
    public User getFollower() {
        return follower;
    }

    public void setFollower(User follower) {
        this.follower = follower;
    }

    public User getFollowing() {
        return following;
    }

    public void setFollowing(User following) {
        this.following = following;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
