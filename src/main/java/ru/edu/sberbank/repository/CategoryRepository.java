package ru.edu.sberbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.edu.sberbank.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}