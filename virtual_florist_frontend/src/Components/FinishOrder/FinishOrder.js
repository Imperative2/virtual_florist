import React, { Component, Fragment } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DateFnsUtils from "@date-io/date-fns";

import Select from "react-select";

import TitleLabel from "../UI/Label/TitleLabel";

import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

import TextArea from "../UI/Input/TextArea/TextArea";

import styleClass from "./FinishOrder.module.css";
class FinishOrder extends Component {
  state = {
    datePicked: new Date(),
    delivery: {
      deliveryId: this.props.deliveryType.deliveryTypes[1].deliveryTypeId,
      deliveryDescription: this.props.deliveryType.deliveryTypes[1].description,
      deliveryPrice: this.props.deliveryType.deliveryTypes[1].cost
    },
    deliverySelectedOption: 1,
    comment: "",
    productsPrice: 0,
    form: {
      firstName: {
        value: this.props.user.user.name,
        validation: {
          required: true,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      lastName: {
        value: this.props.user.user.surname,
        validation: {
          required: true,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      email1: {
        value: this.props.user.user.email,
        validation: {
          required: true,
          email: true
        },
        valid: true,
        touched: false
      },
      phoneNumber: {
        value: this.props.user.user.phoneNumber,
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },

      country: {
        value: this.props.user.user.adress.country,
        validation: {
          required: false,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      city: {
        value: this.props.user.user.adress.city,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      street: {
        value: this.props.user.user.adress.street,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      localNumber: {
        value: this.props.user.user.adress.localNumber,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      zipCode: {
        value: this.props.user.user.adress.zipCode,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      userCountry: {
        value: this.props.user.user.adress.country,
        validation: {
          required: false,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      userCity: {
        value: this.props.user.user.adress.city,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      userStreet: {
        value: this.props.user.user.adress.street,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      userLocalNumber: {
        value: this.props.user.user.adress.localNumber,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      userZipCode: {
        value: this.props.user.user.adress.zipCode,
        validation: {
          required: false
        },
        valid: true,
        touched: false
      }
    },

    formIsValid: true
  };

  componentWillMount() {
    if (this.props.order.basketVerified === false) {
      this.props.history.push("/mainMenu");
    } else {
      this.props.onSetBasketVerified(false);
    }

    if (this.props.user.user.role === "GUEST") {
      console.log("You are a guest");
      let newState = {
        ...this.state,
        form: {
          ...this.state.form,
          firstName: {
            ...this.state.form.firstName,
            validation: {
              required: true,
              lettersOnly: true
            },
            valid: false
          },
          lastName: {
            ...this.state.form.lastName,
            validation: {
              required: true,
              lettersOnly: true
            },
            valid: false
          },
          email1: {
            ...this.state.form.city,
            validation: {
              required: true,
              email: true
            },
            valid: false
          },
          phoneNumber: {
            ...this.state.form.zipCode,
            valid: false
          },
          userCountry: {
            ...this.state.form.userCountry,
            validation: {
              required: true,
              lettersOnly: true
            },
            valid: false
          },
          userCity: {
            ...this.state.form.userCity,
            validation: {
              required: true
            },
            valid: false
          },
          userStreet: {
            ...this.state.form.userStreet,
            validation: {
              required: true
            },
            valid: false
          },
          userZipCode: {
            ...this.state.form.userZipCode,
            validation: {
              required: true
            },
            valid: false
          }
        }
      };

      this.setState(newState);
    } else {
      console.log("You are a client");
    }
  }

  onSubmitOrderWithAccount = () => {
    console.log("ordering");
    const orderedProducts = this.props.basket.basketProducts.map(
      basketProduct => {
        return {
          productId: basketProduct.product.productId,
          productQuantity: basketProduct.quantity
        };
      }
    );

    let form = {
      userId: this.props.user.user.userId,
      deliveryDate: this.state.datePicked.toJSON(),
      comment: this.state.comment,
      deliveryId: this.state.delivery.deliveryId,
      orderedProducts: orderedProducts,
      country: this.state.form.country.value,
      city: this.state.form.city.value,
      street: this.state.form.street.value,
      localNumber: this.state.form.localNumber.value,
      zipCode: this.state.form.zipCode.value
    };

    this.props.onSendOrderWithAccount(form);
  };

  onSubmitOrderWithoutAccount = () => {
    console.log("ordering without account");
    const orderedProducts = this.props.basket.basketProducts.map(
      basketProduct => {
        return {
          productId: basketProduct.product.productId,
          productQuantity: basketProduct.quantity
        };
      }
    );

    let form = {
      userId: this.props.user.user.userId,
      deliveryDate: this.state.datePicked.toJSON(),
      comment: this.state.comment,
      deliveryId: this.state.delivery.deliveryId,
      orderedProducts: orderedProducts,
      country: this.state.form.country.value,
      city: this.state.form.city.value,
      street: this.state.form.street.value,
      localNumber: this.state.form.localNumber.value,
      zipCode: this.state.form.zipCode.value,
      name: this.state.form.firstName.value,
      surname: this.state.form.lastName.value,
      email: this.state.form.email1.value,
      phoneNumber: this.state.form.phoneNumber.value,

      userCountry: this.state.form.userCountry.value,
      userCity: this.state.form.userCity.value,
      userStreet: this.state.form.userStreet.value,
      userLocalNumber: this.state.form.userLocalNumber.value,
      userZipCode: this.state.form.userZipCode.value
    };

    this.props.onSendOrderWithoutAccount(form);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };

    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkIfValid(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifiers in updatedForm) {
      formIsValid = updatedForm[inputIdentifiers].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  checkIfValid = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.lettersOnly) {
      const regex = new RegExp("^[A-Z,a-z, ]+$");
      const result = value.match(regex);
      if (result === null) {
        isValid = false;
      }
    }

    if (rules.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = value.match(regex);
      console.log(result);
      if (result === null) {
        isValid = false;
      }
    }

    if (rules.email2) {
      if (value !== this.state.form.email1.value) {
        isValid = false;
      }
    }

    if (rules.password2) {
      if (value !== this.state.form.password1.value) {
        isValid = false;
      }
    }

    return isValid;
  };

  handleDateChange = date => {
    this.setState({ datePicked: date });
  };

  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleDeliveryMethodChange = option => {
    console.log(this.state);
    const id = option.value - 1;

    if (option.value === 2) {
      let newState = {
        ...this.state,
        formIsValid: false,
        form: {
          ...this.state.form,
          country: {
            ...this.state.form.country,
            validation: { required: false }
          },
          city: {
            ...this.state.form.city,
            validation: { required: false }
          },
          street: {
            ...this.state.form.street,
            validation: { required: false }
          },
          zipCode: {
            ...this.state.form.zipCode,
            validation: { required: false }
          }
        }
      };

      this.setState(newState);
      this.setState({ formIsValid: true });
    } else {
      let newState = {
        ...this.state,
        form: {
          ...this.state.form,
          country: {
            ...this.state.form.country,
            validation: { required: true, lettersOnly: true },
            value: this.props.user.user.adress.country,
            touched: false
          },
          city: {
            ...this.state.form.city,
            validation: { required: true },
            value: this.props.user.user.adress.city,
            touched: false
          },
          street: {
            ...this.state.form.street,
            validation: { required: true },
            value: this.props.user.user.adress.street,
            touched: false
          },
          localNumber: {
            ...this.state.form.localNumber,
            validation: {
              required: false
            },
            value: this.props.user.user.adress.localNumber,
            touched: false
          },
          zipCode: {
            ...this.state.form.zipCode,
            validation: { required: true },
            value: this.props.user.user.adress.zipCode,
            touched: false
          }
        }
      };

      this.setState(newState);
      this.setState({ formIsValid: false && this.state.formIsValid });
    }

    this.setState({
      delivery: {
        deliveryId: this.props.deliveryType.deliveryTypes[id].deliveryTypeId,
        deliveryDescription: this.props.deliveryType.deliveryTypes[id]
          .description,
        deliveryPrice: this.props.deliveryType.deliveryTypes[id].cost
      },
      deliverySelectedOption: id
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props.deliveryType);
    console.log(this.props.order);

    if (this.props.order.orderComplete === true) {
      this.props.onSetOrderComplete(false);
      this.props.history.push("/mainMenu");
    }

    let priceSum = 0;

    if (
      this.props.basket !== null &&
      this.props.basket.basketProducts !== null
    ) {
      this.props.basket.basketProducts.map((basketProduct, index) => {
        let product = null;
        let storage = null;

        for (let i = 0; i < this.props.storages.storages.length; i++) {
          if (
            this.props.storages.storages[i].product.productId ==
            basketProduct.product.productId
          ) {
            storage = this.props.storages.storages[i];
            product = this.props.storages.storages[i].product;

            priceSum += basketProduct.quantity * product.price;
          }
        }
      });
    }

    let options = this.props.deliveryType.deliveryTypes.map(deliveryType => {
      return {
        label: deliveryType.name + " $" + deliveryType.cost,
        value: deliveryType.deliveryTypeId
      };
    });

    let deliveryContactInfo = null;

    if (this.state.deliverySelectedOption != 1) {
      deliveryContactInfo = (
        <Fragment>
          <Grid item xs={12}>
            <hr></hr>
            <TextField
              onChange={e => this.inputChangedHandler(e, "country")}
              variant="outlined"
              required
              fullWidth
              name="country"
              label="Country"
              type="country"
              id="country"
              autoComplete="country"
              defaultValue={this.props.user.user.adress.country}
              error={
                this.state.form.country.touched !== false &&
                this.state.form.country.valid === false
                  ? true
                  : false
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={e => this.inputChangedHandler(e, "city")}
              variant="outlined"
              required
              fullWidth
              name="city"
              label="City"
              type="city"
              id="city"
              autoComplete="address-level2"
              defaultValue={this.props.user.user.adress.city}
              error={
                this.state.form.city.touched !== false &&
                this.state.form.city.valid === false
                  ? true
                  : false
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={e => this.inputChangedHandler(e, "street")}
              variant="outlined"
              required
              fullWidth
              name="street"
              label="Street"
              type="street"
              id="street"
              autoComplete="address-line1"
              defaultValue={this.props.user.user.adress.street}
              error={
                this.state.form.street.touched !== false &&
                this.state.form.street.valid === false
                  ? true
                  : false
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={e => this.inputChangedHandler(e, "localNumber")}
              variant="outlined"
              fullWidth
              name="localNumber"
              label="Local number"
              type="text"
              id="localNumber"
              autoComplete="address-line2"
              defaultValue={this.props.user.user.adress.localNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={e => this.inputChangedHandler(e, "zipCode")}
              variant="outlined"
              required
              fullWidth
              name="zipCode"
              label="Zip Code"
              type="zipCode"
              id="zipCode"
              autoComplete="postal-code"
              defaultValue={this.props.user.user.adress.zipCode}
              error={
                this.state.form.zipCode.touched !== false &&
                this.state.form.zipCode.valid === false
                  ? true
                  : false
              }
            />
          </Grid>
        </Fragment>
      );
    }

    if (this.props.user.user.role != "GUEST") {
      return (
        <div className={styleClass.All}>
          <TitleLabel name="Finish Order"></TitleLabel>

          <Container component="main" maxWidth="xs">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "firstName")}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  disabled={true}
                  autoFocus
                  defaultValue={this.props.user.user.name}
                  error={
                    this.state.form.firstName.touched !== false &&
                    this.state.form.firstName.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "lastName")}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  disabled={true}
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={this.props.user.user.surname}
                  error={
                    this.state.form.lastName.touched !== false &&
                    this.state.form.lastName.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "email1")}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="New Email Address"
                  name="email"
                  type="e-mail"
                  autoComplete="email"
                  disabled={true}
                  defaultValue={this.props.user.user.email}
                  error={
                    this.state.form.email1.touched !== false &&
                    this.state.form.email1.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <hr></hr>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "phoneNumber")}
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  disabled={true}
                  defaultValue={this.props.user.user.phoneNumber}
                  error={
                    this.state.form.phoneNumber.touched !== false &&
                    this.state.form.phoneNumber.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="Delivery date"
                    minDate={new Date()}
                    value={this.state.datePicked}
                    onChange={this.handleDateChange}
                    label="Delivery date"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} container alignItems="center" spacing={2}>
                <Grid item xs={12}>
                  <Select
                    placeholder={"Delivery method:"}
                    options={options}
                    value={options[this.state.deliverySelectedOption]}
                    onChange={option => this.handleDeliveryMethodChange(option)}
                  ></Select>
                </Grid>
                <Grid item xs={12}>
                  <TextArea
                    name="Delivery type description:"
                    rows={2}
                    value={this.state.delivery.deliveryDescription}
                    disabled={true}
                  ></TextArea>
                </Grid>
              </Grid>
              {deliveryContactInfo}
              <Grid item xs={12}>
                <TextArea
                  name="Comment"
                  rows={5}
                  value={this.state.comment}
                  onChangeAction={event => this.handleCommentChange(event)}
                ></TextArea>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!this.state.formIsValid}
              onClick={this.onSubmitOrderWithAccount}
            >
              Pay ${this.state.delivery.deliveryPrice + priceSum}
            </Button>
          </Container>
        </div>
      );
    } else {
      return (
        <div className={styleClass.All}>
          <TitleLabel name="Finish Order"></TitleLabel>

          <Container component="main" maxWidth="xs">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "firstName")}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  defaultValue={this.props.user.user.name}
                  error={
                    this.state.form.firstName.touched !== false &&
                    this.state.form.firstName.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "lastName")}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue={this.props.user.user.surname}
                  error={
                    this.state.form.lastName.touched !== false &&
                    this.state.form.lastName.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "email1")}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="New Email Address"
                  name="email"
                  type="e-mail"
                  autoComplete="email"
                  defaultValue={this.props.user.user.email}
                  error={
                    this.state.form.email1.touched !== false &&
                    this.state.form.email1.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <hr></hr>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "userCountry")}
                  variant="outlined"
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  type="country"
                  id="userCountry"
                  autoComplete="country"
                  defaultValue={this.props.user.user.adress.country}
                  error={
                    this.state.form.userCountry.touched !== false &&
                    this.state.form.userCountry.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "userCity")}
                  variant="outlined"
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="city"
                  id="userCity"
                  autoComplete="address-level2"
                  defaultValue={this.props.user.user.adress.city}
                  error={
                    this.state.form.userCity.touched !== false &&
                    this.state.form.userCity.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "userStreet")}
                  variant="outlined"
                  required
                  fullWidth
                  name="street"
                  label="Street"
                  type="street"
                  id="userStreet"
                  autoComplete="address-line1"
                  defaultValue={this.props.user.user.adress.street}
                  error={
                    this.state.form.userStreet.touched !== false &&
                    this.state.form.userStreet.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "userLocalNumber")}
                  variant="outlined"
                  fullWidth
                  name="localNumber"
                  label="Local number"
                  type="text"
                  id="userLocalNumber"
                  autoComplete="address-line2"
                  defaultValue={this.props.user.user.adress.localNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "userZipCode")}
                  variant="outlined"
                  required
                  fullWidth
                  name="zipCode"
                  label="Zip Code"
                  type="zipCode"
                  id="userZipCode"
                  autoComplete="postal-code"
                  defaultValue={this.props.user.user.adress.zipCode}
                  error={
                    this.state.form.userZipCode.touched !== false &&
                    this.state.form.userZipCode.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <hr></hr>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "phoneNumber")}
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  defaultValue={this.props.user.user.phoneNumber}
                  error={
                    this.state.form.phoneNumber.touched !== false &&
                    this.state.form.phoneNumber.valid === false
                      ? true
                      : false
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="Delivery date"
                    minDate={new Date()}
                    value={this.state.datePicked}
                    onChange={this.handleDateChange}
                    label="Delivery date"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} container alignItems="center" spacing={2}>
                <Grid item xs={12}>
                  <Select
                    placeholder={"Delivery method:"}
                    options={options}
                    value={options[this.state.deliverySelectedOption]}
                    onChange={option => this.handleDeliveryMethodChange(option)}
                  ></Select>
                </Grid>
                <Grid item xs={12}>
                  <TextArea
                    name="Delivery type description:"
                    rows={2}
                    value={this.state.delivery.deliveryDescription}
                    disabled={true}
                  ></TextArea>
                </Grid>
              </Grid>
              {deliveryContactInfo}
              <Grid item xs={12}>
                <TextArea
                  name="Comment"
                  rows={5}
                  value={this.state.comment}
                  onChangeAction={event => this.handleCommentChange(event)}
                ></TextArea>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!this.state.formIsValid}
              onClick={this.onSubmitOrderWithoutAccount}
            >
              Pay ${this.state.delivery.deliveryPrice + priceSum}
            </Button>
          </Container>
        </div>
      );
      return <div></div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    storages: state.storages,
    products: state.products,
    basket: state.basket,
    user: state.user,
    order: state.order,
    deliveryType: state.deliveryType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onWikiEntriesFetch: () => dispatch(actions.fetchWikiEntries()),

    onAddProductToBasket: form => dispatch(actions.addItemToBasket(form)),
    onRemoveItemFromBasket: form =>
      dispatch(actions.removeItemFromBasket(form)),
    onSentRemoveItemFromBasket: form =>
      dispatch(actions.sendRemoveItemFromBasket(form)),
    onVerifyBasket: form => dispatch(actions.verifyBasket(form)),
    onSetBasketVerified: isVerified =>
      dispatch(actions.setBasketVerified(isVerified)),
    onSendOrderWithAccount: form =>
      dispatch(actions.makeOrderWithAccount(form)),
    onSendOrderWithoutAccount: form =>
      dispatch(actions.makeOrderWithoutAccount(form)),
    onSetOrderComplete: isComplete =>
      dispatch(actions.setOrderComplete(isComplete))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishOrder);
