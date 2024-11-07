<script setup>

import { ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const data = ref({
  title: 'KYC Country of Residence',
  description: 'Know Your Customer Verification',
  issuerName: 'PolygonID Issuer',
  titleTextColor: '#000',
  descriptionTextColor: '#000',
  issuerTextColor: '#000',
  backgroundImageUrl: 'ipfs://QmecKDMotkM8a6vxw35CB7iHfToBJnzJrPcmA3gHit9jt9',
  logo: {
    uri: 'ipfs://QmWkSgmHbKRfhndWqHwVgfVpZSrWNiWZMTHb6k5KxY8ySc',
    alt: 'Logo PolygonID Issuer',
  },
});

const uploadImage = ref(null);
const uploadImageCard = ref(null);
const cardStyle = ref({});
async function upload(img) {
  if (!img) {
    uploadImage.value = img;
    return img;
  }
  uploadImage.value = URL.createObjectURL(img);

  return img;
}
function uploadCard(img) {
  if (!img) {
    uploadImageCard.value = img;
    return img;
  }
  uploadImageCard.value = URL.createObjectURL(img);
  cardStyle.value = {
    backgroundImage: `url(${uploadImageCard.value})`,
  };
  return img;
}
</script>

<template>
  <div>
    <div class="circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>

    <div class="card-group">
      <div class="card">
        <div class="bg" :style="cardStyle"></div>
        <div class="card-upload">
          <q-btn icon="upload" round size="13px" color="black" />
          <q-file
            @update:model-value="uploadCard"
            :model="uploadImageCard"
            class="file-op"
            label="Label"
          />
        </div>
        <div class="edit color-description">
          <q-btn rounded no-caps class="custom-btn" size="15px">
            <span class="q-pr-sm">Description color</span>
            <q-icon name="colorize" size="17px" />
            <q-popup-edit v-model="data.descriptionTextColor" v-slot="scope">
              <q-color v-model="data.descriptionTextColor" :model-value="scope.value"
                       no-header no-footer class="my-picker" />
            </q-popup-edit>
          </q-btn>
        </div>
        <div class="edit color-issuer">
          <q-btn rounded no-caps class="custom-btn" size="15px">
            <span class="q-pr-sm">Issuer color</span>
            <q-icon name="colorize" size="17px" />
            <q-popup-edit v-model="data.issuerTextColor" v-slot="scope">
              <q-color v-model="data.issuerTextColor" :model-value="scope.value"
                       no-header no-footer class="my-picker" />
            </q-popup-edit>
          </q-btn>
        </div>
        <div class="edit text-issuer">
          <q-btn rounded no-caps class="custom-btn" size="15px">
            <span class="q-pr-sm">Issuer text</span>
            <q-icon name="edit" class="edit-icon" size="17px" />
            <q-popup-edit v-model="data.issuerName" style="width: 300px" v-slot="scope">
              <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Your nickname"
              >
                <template v-slot:after>
                  <q-btn
                    flat dense color="negative" icon="cancel"
                    @click.stop.prevent="scope.cancel"
                  />

                  <q-btn
                    flat
                    dense
                    color="positive"
                    icon="check_circle"
                    @click.stop.prevent="scope.set"

                  />
                </template>
              </q-input>
            </q-popup-edit>
          </q-btn>
        </div>
        <div class="name cursor-pointer">
          <span :style="{color: data.titleTextColor}">{{ data.title }}</span>
          <div class="edit">
            <q-btn rounded no-caps class="custom-btn" size="15px">
              <span class="q-pr-sm text-black">Title</span>
              <q-icon name="edit" color="black" class="edit-icon" size="17px" />
            </q-btn>
            <q-popup-edit v-model="data.title" style="width: 300px" v-slot="scope">
              <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Your nickname"
              >
                <template v-slot:after>
                  <q-btn
                    flat dense color="negative" icon="cancel"
                    @click.stop.prevent="scope.cancel"
                  />

                  <q-btn
                    flat
                    dense
                    color="positive"
                    icon="check_circle"
                    @click.stop.prevent="scope.set"

                  />
                </template>
              </q-input>
            </q-popup-edit>
          </div>
          <div class="edit color">
            <q-btn rounded no-caps class="custom-btn" size="15px">
              <span class="q-pr-sm text-black">Title color</span>
              <q-icon name="colorize" color="black"  size="17px" />
              <q-popup-edit v-model="data.titleTextColor" v-slot="scope">
                <q-color v-model="data.titleTextColor" :model-value="scope.value"
                         no-header no-footer class="my-picker" />
              </q-popup-edit>
            </q-btn>
          </div>
        </div>
        <div class="description" style="max-width: 270px">
          <span :style="{color: data.descriptionTextColor}">{{ data.description }}</span>
          <div class="edit">
            <q-btn rounded no-caps class="custom-btn" size="14px">
              <span class="q-pr-sm text-black">Description</span>
              <q-icon name="edit" color="black" class="edit-icon" size="17px" />
            </q-btn>
            <q-popup-edit v-model="data.description" style="width: 300px" v-slot="scope">
              <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Your nickname"
              >
                <template v-slot:after>
                  <q-btn
                    flat dense color="negative" icon="cancel"
                    @click.stop.prevent="scope.cancel"
                  />

                  <q-btn
                    flat
                    dense
                    color="positive"
                    icon="check_circle"
                    @click.stop.prevent="scope.set"

                  />
                </template>
              </q-input>
            </q-popup-edit>
          </div>
        </div>
        <div class="logo-url">
          <q-avatar size="38px" class="custom-avatar">
            <div class="upload">
              <q-btn icon="upload" round size="13px" color="black" />
              <q-file
                @update:model-value="upload"
                :model="uploadImage"
                class="file-op"
                label="Label"
              />
            </div>
            <img :src="uploadImage || 'https://cdn.quasar.dev/img/boy-avatar.png'">
          </q-avatar>
        </div>
        <div class="issuerName">
          <span :style="{color: data.issuerTextColor}">{{ data.issuerName }}</span>

        </div>
        <div class="wrap-ring">
          <div class="ring"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrap-ring {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    border-radius: 25px;
    overflow: hidden;
    background-size: cover;
    filter: brightness(.8);
  }
  .file-op {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
  }
  .card-upload {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .7;
    z-index: 100;
  }
  .custom-btn {
    background-color: #9afe5b;
    border-radius: 6px;
    z-index: 1;
    position: relative;
    box-shadow: 0 0 0 2px #7aaa78;
  }
  .edit {
    position: absolute;
    z-index: 100;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: #000;
    }
    &.text-issuer {
      bottom: -60px;
      left: 70px;
      &:after {
        top: -61px;
        left: 61px;
        height: 49px;
        width: 1px;
      }
    }
  }

  .name {
    left: 20px;
    top: 35px;
    font-size: 22px;

    .edit {
      left: -143px;
      top: -1px;

      &:after {
        top: 18px;
        left: 90px;
        width: 49px;
        height: 1px;
      }

      &.color {
        left: 43px;
        top: -100px;

        &:after {
          top: 46px;
          left: 61px;
          height: 49px;
          width: 1px;
        }
      }
    }
  }

  .logo-url {
    position: absolute;
    bottom: 40px;
    left: 20px;
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    .custom-avatar {
      position: relative;
      overflow: hidden;
      &:hover {
        .upload {
          opacity: .6;
          visibility: visible;
        }
      }
      .upload {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
      }
    }

  }

  .issuerName {
    position: absolute;
    bottom: 47px;
    left: 75px;
    color: rgba(255, 255, 255, 1);
    font-size: 17px;
    &:after {
      content: '';
      position: absolute;
      top: 14px;
      left: 107%;
      height: 1px;
      width: 222px;
      background: #000;
    }
  }

  .description {
    top: 85px;
    left: 20px;

    .edit {
      left: -183px;
      top: -7px;

      &:after {
        top: 18px;
        left: 131px;
        width: 49px;
        height: 1px;
      }
    }
  }
  .color-issuer, .color-description {
    right: -180px;
    top: 76px;

    &:after {
      top: 21px;
      left: -162px;
      width: 153px;
      height: 1px;
    }
  }
  .color-issuer {
    top: inherit;
    bottom: 37px;
    right: -146px;
    &:after {
      display: none;
    }
  }

  .description,
  .name,
  .from,
  .to {
    color: #fff;
    font-weight: 400;
    letter-spacing: 2px;
    text-shadow: 0 0 2px rgba(0, 0, 0, .2);
  }

  .number {
    left: 40px;
    bottom: 65px;
    font-family: "Nunito", sans-serif;
  }

  .from {
    font-size: 0.5rem;
    bottom: 35px;
    right: 110px;
  }

  .to {
    font-size: 0.5rem;
    bottom: 35px;
    right: 40px;
  }

  .ring {
    z-index: 1;
  }

  .name {
    z-index: 2;
  }

  .card {
    position: relative;
  }
</style>
