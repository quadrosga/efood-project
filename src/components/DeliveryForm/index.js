import { ButtonLink } from "../Button/styles";
import {
  FormContainer,
  FormContent,
  FormTitle,
  FormItems,
  NestedDivs,
  NestedDivOne,
  NestedDivTwo,
} from "./styles";

const DeliveryForm = ({ onOpenPay, onBackToCart, variant }) => (
  <FormContainer>
    <FormContent>
      <FormTitle>Entrega</FormTitle>
      <FormItems variant={variant}>
        <label htmlFor="name">Quem irá receber</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" name="address" />
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" name="city" />
        <NestedDivs>
          <NestedDivOne>
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" name="cep" />
          </NestedDivOne>
          <NestedDivTwo>
            <label htmlFor="number">Número</label>
            <input type="text" id="number" name="number" />
          </NestedDivTwo>
        </NestedDivs>
        <label htmlFor="comp">Complemento (opcional)</label>
        <input type="text" id="comp" name="comp" />
      </FormItems>
      <ButtonLink onClick={onOpenPay} variant="submit">
        Continuar com pagamento
      </ButtonLink>
      <ButtonLink onClick={onBackToCart} variant="submit">
        Voltar para o carrinho
      </ButtonLink>
    </FormContent>
  </FormContainer>
);

export default DeliveryForm;
