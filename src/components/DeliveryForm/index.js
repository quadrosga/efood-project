import React, { useState } from "react";
import { ButtonLink } from "../Button/styles";
import {
  FormContainer,
  FormContent,
  FormTitle,
  FormItems,
  NestedDivs,
  NestedDivOne,
  NestedDivTwo,
  ErrorMessage,
} from "./styles";

const DeliveryForm = ({ onOpenPay, onBackToCart, variant }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    const newErrors = {};

    inputs.forEach((input) => {
      const { id, value, type } = input;

      if (id === "comp") return;

      if (!value.trim()) {
        newErrors[id] = "Campo obrigatório";
        return;
      }

      if (id === "cep" && !/^\d+$/.test(value)) {
        newErrors[id] = "Por favor, insira cep válido";
      }

      if (type === "tel" && !/^\d+$/.test(value)) {
        newErrors[id] = "Por favor, insira telefone válido";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentClick = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onOpenPay();
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormTitle>Entrega</FormTitle>
        <form>
          <FormItems variant={variant}>
            <label htmlFor="name">Quem irá receber</label>
            <input type="text" id="name" name="name" />
            {errors.name && (
              <ErrorMessage className="error">{errors.name}</ErrorMessage>
            )}

            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" />
            {errors.address && (
              <ErrorMessage className="error">{errors.address}</ErrorMessage>
            )}

            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" name="city" />
            {errors.city && (
              <ErrorMessage className="error">{errors.city}</ErrorMessage>
            )}

            <NestedDivs>
              <NestedDivOne>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" />
                {errors.cep && (
                  <ErrorMessage className="error">{errors.cep}</ErrorMessage>
                )}
              </NestedDivOne>
              <NestedDivTwo>
                <label htmlFor="number">Número</label>
                <input type="tel" id="number" name="number" />
                {errors.number && (
                  <ErrorMessage className="error">{errors.number}</ErrorMessage>
                )}
              </NestedDivTwo>
            </NestedDivs>

            <label htmlFor="comp">Complemento (opcional)</label>
            <input type="text" id="comp" name="comp" />
          </FormItems>

          <ButtonLink onClick={handlePaymentClick} variant="submit">
            Continuar com pagamento
          </ButtonLink>
          <ButtonLink onClick={onBackToCart} variant="submit">
            Voltar para o carrinho
          </ButtonLink>
        </form>
      </FormContent>
    </FormContainer>
  );
};

export default DeliveryForm;
