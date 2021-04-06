import { useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const SummaryForm = () => {
  const [policyCheck, setPolicyCheck] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      No ice cream will be delivered
    </Tooltip>
  );
  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <span style={{ color: "blue" }} id="terms-conditions">
          Terms and Conditions
        </span>
      </OverlayTrigger>
    </span>
  );

  return (
    <div>
      <Form>
        <Form.Check
          checked={policyCheck}
          id="policy-condition"
          label={checkboxLabel}
          onChange={({ target }) => {
            setPolicyCheck(target.checked);
          }}
        />
      </Form>
      <Button disabled={!policyCheck} type="submit">
        Confirm order
      </Button>
    </div>
  );
};

export default SummaryForm;
