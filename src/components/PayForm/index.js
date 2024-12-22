import { ButtonLink } from "../Button/styles";
import {
  FormContainer,
  FormContent,
  FormItems,
  FormTitle,
  NestedDivs,
  NestedDivOne,
  NestedDivTwo,
} from "../DeliveryForm/styles";

const PayForm = ({ onOpenOrderId, onBackToDelivery }) => (
  <FormContainer>
    <FormContent>
      <FormTitle>Pagamento - Valor a pagar R$</FormTitle>
      <FormItems>
        <label htmlFor="cname">Nome no cartão</label>
        <input type="text" id="cname" name="cname" />
        <NestedDivs>
          <NestedDivOne>
            <label htmlFor="cnum">Número do cartão</label>
            <input type="text" id="cnum" name="cnum" />
          </NestedDivOne>
          <NestedDivTwo>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" />
          </NestedDivTwo>
        </NestedDivs>
        <NestedDivs>
          <NestedDivOne>
            <label htmlFor="mexpire">Mês de vencimento</label>
            <input type="text" id="mexpire" name="mexpire" />
          </NestedDivOne>
          <NestedDivTwo>
            <label htmlFor="yexpire">Ano de vencimento</label>
            <input type="text" id="yexpire" name="yexpire" />
          </NestedDivTwo>
        </NestedDivs>
      </FormItems>
      <ButtonLink onClick={onOpenOrderId} variant="submit">
        Finalizar pagamento
      </ButtonLink>
      <ButtonLink onClick={onBackToDelivery} variant="submit">
        Voltar para a edição de endereço
      </ButtonLink>
    </FormContent>
  </FormContainer>
);

export default PayForm;
