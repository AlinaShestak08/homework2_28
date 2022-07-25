/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
export enum ModalActionTypes {
    ShowModal,
    HideModal,
  }
  
  export interface ModalAction {
    type: ModalActionTypes;
    payload?: any;
  }
  
  export function showModal(): ModalAction {
    return {
      type: ModalActionTypes.ShowModal,
    };
  }
  
  export function hideModal(): ModalAction {
    return {
      type: ModalActionTypes.HideModal,
    };
  }