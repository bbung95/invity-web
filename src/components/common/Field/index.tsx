import FieldHelpText from './ui/FieldHelpText';
import FieldLabel from './ui/FieldLabel';
import FieldMain from './ui/FieldMain';

const Field = Object.assign(FieldMain, {
  Label: FieldLabel,
  HelpText: FieldHelpText,
});

export default Field;
