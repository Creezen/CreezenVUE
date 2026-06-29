<template>
    <div class="parent">
        <form class="upload" method="post" enctype="multipart/form-data" @submit.prevent>
            <span><input type="file" name="apkFile" ref="apkFile" @change="onFileSelect"/></span>
            <span>
                <label>版本号:</label>
                <label>{{ version }}</label>
            </span>
            <span>
                <label>APK大小:</label>
                <label>{{ size }}</label>
            </span>
            <span>
                <label>操作人:</label>
                <label>{{ operator }}</label>
            </span>
            <span class="fileStatus"><label>{{ status }}</label></span>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'FirstPage',
    data() {
        return {
            url: 'http://localhost:8080',
            version: '请先选择文件',
            size: '请先选择文件',
            operator: '张三',
            status: '请先选择文件'
        }
    },
    methods: {
        onFileSelect(e) {
            this.version = "解析中..."
            this.size = "解析中..."
            this.status = '文件正在解析，请稍后...'
            const requestUrl = '/apk/checkApkInfo'
            const fd = new FormData()
            fd.append('apkFile', e.target.files[0])
            axios({
                url: requestUrl,
                method: 'post',
                data: fd
            }).then(result => {
                const data = result.data
                this.version = data.versionCode
                this.size = data.fileSize
                this.status = '文件解析完成，正在上传中...'
                this.uploadApk(data)
            })
        },
        uploadApk(data) {
            const requestUrl = '/apk/uploadApk'
            const fd = new FormData()
            console.log('file ' + this.$refs.apkFile.files[0])
            fd.append('apkFile', this.$refs.apkFile.files[0])
            fd.append('versionCode', data.versionCode)
            fd.append('versionName', data.versionName)
            axios({
                url: requestUrl,
                method: 'post',
                data: fd
            }).then(result => {
                this.status = result.data
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped lang="less">
.parent {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    background: #f5f7fa;
    box-sizing: border-box;
}

.upload {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    padding: 32px 40px;
    width: 100%;
    max-width: 640px;
    font-size: 20px;
    box-sizing: border-box;

    span {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 12px;
        margin-bottom: 12px;
        gap: 12px;

        &:first-child {
            background: #f0f2f5;
            border-radius: 10px;
            padding: 8px 16px;
            border: 1px dashed #c0c4cc;
            transition: border-color 0.3s;

            &:hover {
                border-color: #409eff;
            }

            input[type="file"] {
                display: block;
                width: 100%;
                border: none;
                background: transparent;
                font-size: 16px;
                color: #333;
                cursor: pointer;
                padding: 4px 0;

                &::file-selector-button {
                    background: #409eff;
                    color: #fff;
                    border: none;
                    padding: 6px 18px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background 0.3s;
                    margin-right: 12px;

                    &:hover {
                        background: #66b1ff;
                    }
                }
            }
        }

        label {
            transition: color 0.3s ease;
            margin-right: 0;

            &:first-child {
                min-width: 100px;
                font-weight: 500;
                color: #606266;
            }

            &:last-child {
                font-weight: 600;
                color: #303133;
            }

            &:hover {
                color: #4caf50;
            }
        }

        &.fileStatus {
            justify-content: center;
            margin-top: 24px;
            margin-bottom: 0;

            label {
                background: #ecf5ff;
                color: #409eff;
                padding: 6px 24px;
                border-radius: 30px;
                font-size: 18px;
                font-weight: 500;
                display: inline-block;
                min-width: auto;
                transition: all 0.3s;

                &:hover {
                    color: #000000;
                }
            }
        }
    }
}
</style>