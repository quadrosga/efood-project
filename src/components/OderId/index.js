import { ButtonLink } from "../Button/styles";
import {
  FormContainer,
  FormContent,
  FormItems,
  FormTitle,
} from "../DeliveryForm/styles";

const OrderId = ({ onCloseOrderId }) => (
  <FormContainer>
    <FormContent>
      <FormTitle>Pedido realizado - ORDER_ID</FormTitle>
      <FormItems variant="order-id">
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          <br /> Lembre-se da importância de higienizar as mãos após o
          recebimento do pedido, garantindo assim sua segurança e bem-estar
          durante a refeição. <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </FormItems>
      <ButtonLink onClick={onCloseOrderId} variant="submit">
        Concluir
      </ButtonLink>
    </FormContent>
  </FormContainer>
);

export default OrderId;
