package com.example.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Empresa;



@Repository
public interface EmpresaRepository extends MongoRepository<Empresa, String>{
	
}

