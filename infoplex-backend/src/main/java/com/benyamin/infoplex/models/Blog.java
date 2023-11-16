package com.benyamin.infoplex.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "Blog")
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "author", nullable = false, columnDefinition = "TEXT")
    private String author;

    @Column(name = "title", nullable = false, columnDefinition = "TEXT", unique = true)
    private String title;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "date", nullable = false, columnDefinition = "DATE")
    private LocalDate date;

    // Hibernate expects entities to have a no-arg constructor,
    // though it does not necessarily have to be public.
    private Blog() {
    }

    public Blog(String author, String title, String content, LocalDate date) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.date = date;
    }

    public Long getId() {
        return this.id;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getTitle() {
        return this.title;
    }

    public String getContent() {
        return this.content;
    }

    public LocalDate getDate() {
        return this.date;
    }
}