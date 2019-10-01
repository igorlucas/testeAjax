package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Fornecedor;



@Repository
public interface FornecedorRepository extends MongoRepository<Fornecedor, String>{

	@Query("{ $and: [ { empresa.id: {$eq: ?1} }] }")
	List<Fornecedor> fullSearch(String empresa);
}

