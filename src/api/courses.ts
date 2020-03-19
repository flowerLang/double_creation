import { get, post, put } from '@/utils/http'
import path from '@/utils/path'
import axios from 'axios'

export function getAllCourse(params: object) {
  return axios.get(path.course.default, { params }).then(res => Promise.resolve(res.data))
}

export function getRecCourse() {
  return get(path.course.recommend)
}

export function getCourseDetail(id: string) {
  return axios.get(`${path.course.detail}/${id}`).then(res => Promise.resolve(res.data))
}

export function startContainer(data: object) {
  return post(path.course.startContainer, data)
}

export function checkContainer(data: object) {
  return get(path.course.checkContainer, data)
}

export function commitRate(data: object) {
  return put(path.course.rate, data)
}
