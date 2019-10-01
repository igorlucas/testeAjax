package com.example.demo.services.validations;


import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.example.demo.domain.Fornecedor;
import com.example.demo.domain.enums.TipoFornecedor;
import com.example.demo.resources.exceptions.FieldMessage;

public class InsertFornecedor implements ConstraintValidator<ValidarFornecedor, Fornecedor> {

	@Override
	public void initialize(ValidarFornecedor ann) {
	}

	@Override
	public boolean isValid(Fornecedor obj, ConstraintValidatorContext context) {
		
		List<FieldMessage> list = new ArrayList<>();
		
		if (obj.getTipo().equals(TipoFornecedor.PESSOAFISICA.getCod()) && (obj.getRg() == null || obj.getRg() == "") ) {
			list.add(new FieldMessage("rg", "RG é obrigatório para fornecedor pessoa fidíca"));
		}
		
		if (obj.getTipo().equals(TipoFornecedor.PESSOAFISICA.getCod()) && (obj.getDtNascimento() == null) ) {
			list.add(new FieldMessage("dtNascimento", "Data de Nascimento é obrigatória para fornecedor pessoa fidíca"));
		}

		
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}


