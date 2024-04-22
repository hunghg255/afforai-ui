import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';
import Section3 from '@/components/Section3/Section3';
import AppLayout from '@/layout/AppLayout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Section1 />
      <Section2 />
      <Section3 />
    </AppLayout>
  );
}

export default App;
