import React, { useState } from "react";
import { ButtonLink } from "../Button/styles";
import {
  FormContainer,
  FormContent,
  FormItems,
  FormTitle,
  NestedDivs,
  NestedDivOne,
  NestedDivTwo,
  ErrorMessage,
} from "../DeliveryForm/styles";

const PayForm = ({ onOpenOrderId, onBackToDelivery, totalPrice }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    const newErrors = {};

    inputs.forEach((input) => {
      const { id, value } = input;

      if (!value.trim()) {
        newErrors[id] = "Campo obrigatório";
        return;
      }

      if (id === "cnum" && !/^\d+$/.test(value)) {
        newErrors[id] = "Número de cartão inválido";
      }

      if (id === "cvv" && !/^\d+$/.test(value)) {
        newErrors[id] = "CVV inválido";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentClick = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onOpenOrderId();
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormTitle>
          Pagamento - Valor a pagar R$ {totalPrice.toFixed(2)}
        </FormTitle>
        <form>
          <FormItems>
            <label htmlFor="cname">Nome no cartão</label>
            <input type="text" id="cname" name="cname" />
            {errors.cname && <ErrorMessage>{errors.cname}</ErrorMessage>}

            <NestedDivs>
              <NestedDivOne>
                <label htmlFor="cnum">Número do cartão</label>
                <input type="text" id="cnum" name="cnum" />
                {errors.cnum && <ErrorMessage>{errors.cnum}</ErrorMessage>}
              </NestedDivOne>
              <NestedDivTwo>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" />
                {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
              </NestedDivTwo>
            </NestedDivs>

            <NestedDivs>
              <NestedDivOne>
                <label htmlFor="mexpire">Mês de vencimento</label>
                <input type="month" id="mexpire" name="mexpire" />
                {errors.mexpire && (
                  <ErrorMessage>{errors.mexpire}</ErrorMessage>
                )}
              </NestedDivOne>
              <NestedDivTwo>
                <label htmlFor="yexpire">Ano de vencimento</label>
                <input type="month" id="yexpire" name="yexpire" />
                {errors.yexpire && (
                  <ErrorMessage>{errors.yexpire}</ErrorMessage>
                )}
              </NestedDivTwo>
            </NestedDivs>
          </FormItems>

          <ButtonLink onClick={handlePaymentClick} variant="submit">
            Finalizar pagamento
          </ButtonLink>
          <ButtonLink onClick={onBackToDelivery} variant="submit">
            Voltar para a edição de endereço
          </ButtonLink>
        </form>
      </FormContent>
    </FormContainer>
  );
};

export default PayForm;
