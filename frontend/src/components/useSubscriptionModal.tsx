import { EuiButton, EuiFormRow } from '@elastic/eui';
import { useState } from 'react';
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiButtonEmpty,
} from '@elastic/eui';
import TextAreaField from './inputs/TextAreaField';
import Api from '../utils/api';
import Analytics from '../utils/analytics';
import Toast from '@omkar111111/components/Toast';

export default function useSubscriptionModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [requirements, setRequirements] = useState('');

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setRequirements('');
    setHasSubmittedOnce(false);
  };

  const errors = [];
  if (requirements.length === 0) {
    errors.push('Please enter your requirements.');
  }
  const isInvalid = errors.length > 0;

  const handleSubmit = e => {
    e.preventDefault();

    setHasSubmittedOnce(true);
    if (!isInvalid) {
      Analytics.trackBuySubscriptionInterestContact(requirements);
      Toast.success('Thank you for Contacting Us.');
      toggleModal();
    }
  };

  const modal = isModalVisible && (
    <EuiModal onClose={toggleModal}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>Buy Subscription</EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <div>
          <EuiFormRow
            label="Requirements"
            isInvalid={hasSubmittedOnce && isInvalid && true}
            error={hasSubmittedOnce && isInvalid && errors}>
            <TextAreaField
              placeholder="Enter your requirements"
              isInvalid={hasSubmittedOnce && isInvalid && true}
              value={requirements}
              onChange={setRequirements}
            />
          </EuiFormRow>
        </div>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButtonEmpty onClick={toggleModal}>Cancel</EuiButtonEmpty>
        <EuiButton onClick={handleSubmit}>Submit</EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
  return { showModal: () => setIsModalVisible(true), modal };
}
