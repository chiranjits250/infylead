import { useState } from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiHeaderLink,
  EuiModalHeaderTitle,
} from '@elastic/eui';
import TextAreaField from './inputs/TextAreaField';
import Toast from '@omkar111111/components/Toast';
import Analytics from '../utils/analytics'

function ShareYourThoughtsModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [feedback, setfeedback] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setfeedback('');
  };

  const handleChange = value => {
    setfeedback(value);
  };

  const handleSubmit = () => {
    const givenFeedback = feedback.trim();
    Toast.success('Thank you for Feature Suggesting.');

    if (givenFeedback.length > 0) {
      Analytics.trackSuggestedFeautre(givenFeedback)
    }

    toggleModal();
  };
  
  // Maybe AB TEST
  // Suggest Features
  // Give Feedback
  // Share Your Thoughts
  const content = "Suggest Features"

  return (
    <>

      <EuiHeaderLink onClick={toggleModal} color="primary">{content}</EuiHeaderLink>
      {isModalVisible && (
        <EuiModal onClose={toggleModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>{content}</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <div>
              <EuiFormRow
                label={content}
                >
                <TextAreaField
                  aria-label={content}
                  placeholder={content}
                  value={feedback}
                  onChange={handleChange}
                  
                />
              </EuiFormRow>
            </div>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButtonEmpty onClick={toggleModal}>Cancel</EuiButtonEmpty>
            <EuiButton  fill onClick={handleSubmit}>Submit</EuiButton>

          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
}
const GiveFeedback = () => {
  return (
    <ShareYourThoughtsModal />
  );
};
export default GiveFeedback;
