package com.benyamin.infoplex.repositories;

import org.springframework.data.repository.CrudRepository;

import com.benyamin.infoplex.models.Blog;

public interface BlogRepository extends CrudRepository<Blog, Long> {

    // add a new method that updates an existing blog

}
