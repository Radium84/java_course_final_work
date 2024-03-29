package ru.edu.sberbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.edu.sberbank.entity.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}