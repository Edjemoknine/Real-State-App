"use client";
import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import FileInput from "@/app/components/FileUpload";
import Image from "next/image";
import { uploadAvatar } from "@/lib/upload";
import { useRouter } from "next/navigation";
import { updateAvatar } from "@/lib/actions/user";
const UploadAvatar = ({ userId }: { userId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<File>();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div>
      <button onClick={onOpen}>
        <PencilIcon className="w-6  text-slate-400 hover:text-primary transition-colors" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <FileInput
                  onChange={(e) => setImage((e as any).target.files[0])}
                />
                {image && (
                  <Image
                    width={100}
                    height={100}
                    src={URL.createObjectURL(image)}
                    alt="Avatar image"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  isLoading={isLoading}
                  color="primary"
                  onPress={async () => {
                    setLoading(true);
                    if (!image) {
                      onClose();
                      return;
                    }
                    const avatarUrl = await uploadAvatar(image!);
                    const result = await updateAvatar(avatarUrl, userId);
                    router.refresh();
                    setLoading(false);
                    onClose();
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UploadAvatar;
