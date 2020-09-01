import config from "../../../config";
import sendgridClient from "../service/sendgridClient";
import { EmailAccountRecoveryError } from "../errors";
import { IEmailAccountRecoveryRepository } from "../interfaces";

const { host, from } = config.get("email");

const sendRecoveryLink: IEmailAccountRecoveryRepository["sendRecoveryLink"] = async (
  address: string,
  { token },
) => {
  try {
    await sendgridClient.send({
      subject: "Recupera tu Contraseña",
      to: [{ email: address }],
      from: {
        email: from,
        name: "IBEX Mercado",
      },
      templateId: "",
      dynamicTemplateData: {
        reset_password_url: `${host}/restablecer-contraseña?t=${token}`,
      },
    });
  } catch (error) {
    switch (error.code) {
      case 403:
        throw EmailAccountRecoveryError.unauthorizedError;
        break;
      case 421:
        throw EmailAccountRecoveryError.messagesTemporarilyDefferedError;
        break;
      case 450:
        throw EmailAccountRecoveryError.tooManyConnectionsError;
        break;
      case 451:
        throw EmailAccountRecoveryError.maximumCreditsExceededError;
        break;
      case 452:
        throw EmailAccountRecoveryError.insufficientLocalStorageError;
        break;
      case 550:
        throw EmailAccountRecoveryError.mailboxUnavailableError;
        break;
      case 551:
        throw EmailAccountRecoveryError.userDoesNotExistsError;
        break;
      case 552:
        throw EmailAccountRecoveryError.messageSizeExceededError;
        break;
      case 553:
        throw EmailAccountRecoveryError.invalidUserError;
        break;
      case 554:
        throw EmailAccountRecoveryError.mailRefusedError;
        break;
      default:
        throw error;
    }
  }
};

export const EmailAccountRecoveryRepository: IEmailAccountRecoveryRepository = {
  sendRecoveryLink,
};