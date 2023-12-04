export default function formatDate(date: Date, locale: string = 'pt-BR') {
  const formatDate = new Date(date);
  return formatDate.toLocaleDateString(locale);
}