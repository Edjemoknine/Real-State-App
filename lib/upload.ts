import { createClient } from "@supabase/supabase-js";

export async function uploadAvatar(image: File) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasekey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl!, supabasekey!);
  const data = await supabase.storage
    .from("avatars")
    .upload(`${image.name}_${Date.now()}`, image);
  const url = await supabase.storage
    .from("avatars")
    .getPublicUrl(data.data?.path!);
  return url.data.publicUrl;
}
