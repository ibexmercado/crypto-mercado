import { MutationSendPhoneNumberVerificationCodeArgs } from "@ibexcm/libraries/api";
import { Box, Container, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router";
import {
  Button,
  StepsSidebar,
  TextField,
  ToolbarPadding,
  Typography,
} from "../../../common/components";
import DependencyContext from "../../../common/contexts/DependencyContext";
import { styles } from "../../../common/theme";
import routes from "../../../routes";
import { MobileAppBar } from "../components";
import { OnboardingRepositoryInjectionKeys } from "../InjectionKeys";

interface ISendPhoneNumberVerificationCodeProps extends WithStyles, RouteComponentProps {}

const Component: React.FC<ISendPhoneNumberVerificationCodeProps> = ({
  classes,
  history,
  match,
  ...props
}) => {
  const dependencies = React.useContext(DependencyContext);
  const OnboardingRepository = dependencies.provide(OnboardingRepositoryInjectionKeys);
  const [input, setInput] = React.useState<MutationSendPhoneNumberVerificationCodeArgs>({
    args: {
      number: "+502",
    },
  });

  const {
    execute: executeSendPhoneNumberVerificationCodeMutation,
  } = OnboardingRepository.useSendPhoneNumberVerificationCodeMutation();

  const onSendVerificationCode = async () => {
    try {
      await executeSendPhoneNumberVerificationCodeMutation(input);
      history.push(routes.onboarding.verifyPhoneNumber, { number: input.args.number });
    } catch (error) {}
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput({ ...input, args: { number: value } });
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSendVerificationCode();
    }
  };

  return (
    <Box display="flex">
      <StepsSidebar />
      <Container maxWidth="xl">
        <MobileAppBar />
        <ToolbarPadding />
        <Box mb={4}>
          <Typography variant="h5" mb={1}>
            Ingresa tu teléfono
          </Typography>
          <Typography>Enviaremos un código por SMS para verificar tu número.</Typography>
        </Box>
        <Box mb={4}>
          <TextField
            autoFocus
            fullWidth
            label="Número de teléfono"
            variant="outlined"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={input.args.number}
            type="tel"
            mb={3}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            onClick={onSendVerificationCode}
          >
            Enviar SMS
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export const SendPhoneNumberVerificationCode = withStyles((theme: Theme) => ({
  ...styles(theme),
}))(Component);