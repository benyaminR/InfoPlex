package com.benyamin.infoplex.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.benyamin.infoplex.models.Blog;
import com.benyamin.infoplex.repositories.BlogRepository;

@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL
@RestController
public class BlogsController {

    private final BlogRepository blogRepository;

    public BlogsController(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @GetMapping("/blogs")
    public Iterable<Blog> findAllEmployees() {
        return this.blogRepository.findAll();
    }

    @GetMapping("/blogs/{id}")
    public Blog findOneEmployee(@PathVariable Long id) {
        return this.blogRepository.findById(id).orElseThrow();
    }

    @PostMapping("/add-blog")
    public Blog addOneEmployee(@RequestBody Blog blog) {
        return this.blogRepository.save(blog);
    }

    @PutMapping("/update-blog")
    public Blog updateOneEmployee(@RequestBody Blog blog) {
        return this.blogRepository.save(blog);
    }

    @GetMapping("/delete-blog")
    public void deleteOneEmployee(@RequestBody Blog blog) {
        this.blogRepository.delete(blog);
    }

}
