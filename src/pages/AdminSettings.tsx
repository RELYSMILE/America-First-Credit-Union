import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { uploadImageToCloudinary } from '@/lib/cloudinary';
import { db } from '@/lib/Config';
import DashboardLayout from '@/components/DashboardLayout';
import { toast } from 'sonner';
import { Loader2, Save } from 'lucide-react';

const AdminSettings: React.FC = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({ app_name: '', hero_title: '', hero_subtitle: '', imf_enabled: false, avatar: '', });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
    const loadSettings = async () => {
      try {
        const ref = doc(db, 'nest_settings', 'app');
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          setSettings({
            app_name: data.app_name || '',
            hero_title: data.hero_title || '',
            hero_subtitle: data.hero_subtitle || '',
            avatar: data.avatar || '',
            imf_enabled: data.imf_enabled ?? false,
          });
        }
      } catch (err) {
        console.error(err);
        toast.error('Failed to load settings');
      } finally {
        setFetching(false);
      }
    };

    loadSettings();
  }, []);

    if (!user || user.role !== 'admin') {
    return (
      <DashboardLayout>
        <p>Forbidden</p>
      </DashboardLayout>
    );
  }

    const save = async () => {
  setLoading(true);

  try {
    // Keep existing avatar by default
    let avatarUrl = settings.avatar;

    // Upload only if a new image was selected
    if (imageFile) {
      avatarUrl = await uploadImageToCloudinary(imageFile);
    }

    const ref = doc(db, 'nest_settings', 'app');

    await setDoc(
      ref,
      {
        ...settings,
        avatar: avatarUrl,
      },
      { merge: true }
    );

    // Update local state
    setSettings((prev) => ({
      ...prev,
      avatar: avatarUrl,
    }));

    setImageFile(null);

    toast.success('Settings updated');
  } catch (e: any) {
    toast.error(e.message || 'Failed to update settings');
  } finally {
    setLoading(false);
  }
};

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Settings</h1>
        <p className="text-slate-500 mb-8">Configure global app settings</p>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 text-slate-900 dark:text-white placeholder:text-slate-400">
          <Field label="App Name" value={settings.app_name} onChange={(v) => setSettings({ ...settings, app_name: v })} />
          <Field label="Hero Title" value={settings.hero_title} onChange={(v) => setSettings({ ...settings, hero_title: v })} />
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Hero Subtitle</label>
            <textarea value={settings.hero_subtitle} onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })} rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-[#0b24f3] focus:ring-2 focus:ring-[#0b24f3]/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
          </div>
              <div>
                <label style={{ marginTop: '0.5rem' }} className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  App logo
                </label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center hover:border-[tomato] transition">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="avatarUpload"
                  />

                  <label htmlFor="avatarUpload" className="cursor-pointer">
                    <p className="text-sm text-slate-500">
                      Click to upload new app logo
                    </p>
                  </label>

                  {/* PREVIEW */}
                  {imageFile && (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="preview"
                      className="mt-3 w-20 h-20 object-cover rounded-full mx-auto"
                    />
                  )}
                </div>
              </div>

              <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Transfer Page Settings</h1>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    IMF Verification
                  </h3>

                  <p className="text-sm text-slate-500">
                    Require users to complete IMF verification before transferring funds.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSettings({
                      ...settings,
                      imf_enabled: !settings.imf_enabled,
                    })
                  }
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                    settings.imf_enabled
                      ? "bg-[#0b24f3]"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings.imf_enabled
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
          <button onClick={save} disabled={loading} className="w-full py-3 rounded-xl bg-[#0b24f3] hover:bg-[#0b24f3]/80 text-white font-semibold shadow-lg shadow-[#0b24f3]/30 flex items-center justify-center gap-2 disabled:opacity-50">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save Settings
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-[tomato] outline-none" />
  </div>
);

export default AdminSettings;
