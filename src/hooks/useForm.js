import { useState, useCallback } from 'react';

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onChangeDraft = useCallback((draft) => {
    setForm((form) => {
      const [[key, value]] = Object.entries(draft);

      const props = !Array.isArray(value) && typeof value === 'object' ? { [key]: { ...form[key], ...value } } : draft;
      return { ...form, ...props };
    });
  }, []);

  return [form, onChange, onChangeDraft];
};

export default useForm;
