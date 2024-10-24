import { TopicList } from '../../shared/components';
import { BaseLayoutPage } from '../../shared/layouts/BaseLayoutPage';

export const Dashboard: React.FC = () => {
  return (
    <BaseLayoutPage>
      <TopicList />
    </BaseLayoutPage>
  );
};
