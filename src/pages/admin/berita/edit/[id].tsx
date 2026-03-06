import EditBeritaView from '@/views/admin/berita/edit';
import { useRouter } from 'next/router';

const EditBeritaPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <EditBeritaView id={Number(id)} />
  );
}

export default EditBeritaPage;
