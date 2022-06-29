import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import ProgressBar from "Component/ProgressBar/ProgressBar";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";


class Checkout extends SourceCheckout {

  checkProgress=()=>{
    if(this.props.checkoutStep==='SHIPPING_STEP'){
      return 1
    }else if(this.props.checkoutStep==='BILLING_STEP'){
      return 3
    }
  }
  render() {
    let arr = [{step: 1, title: 'SHIPPING_STEP'}, {step:2, title: 'BILLING_STEP'}]
    return (
      <div>
        <ProgressBar step = {this.props.checkoutStep} steps = {arr}/>
        <main block="Checkout">
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}>
            {this.renderSummary(true)}
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </div>
    );
  }
}

export default Checkout;
