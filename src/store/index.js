import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function storeItem() {
    
    // const router = useRouter();
    const newItemText = ref('');
    const categories = reactive([
        { id: 1, titulo: 'Business', color: '#d623d6' },
        { id: 2, titulo: 'Personal', color: '#53b6f8' },
    ])
    const items = reactive([
        { id: 1, text: 'Dayly meeting with team', complete: false, Categories: 'business' },
        { id: 2, text: 'Pay for rent', complete: false, Categories: 'personal' },
        { id: 3, text: 'Check emails', complete: false, Categories: 'business' },
        { id: 4, text: 'Lunch with Emma', complete: false, Categories: 'personal' },
        { id: 5, text: 'meditation', complete: false, Categories: 'personal' },
    ])

    const addItem = () => {
        items.push({
            id: Date.now(),
            text: newItemText.value,
            complete: false,
        })
        console.log(newItemText)
        newItemText.value = '';
        // router.push('/')
    }
    
    const removeItem = (item) => {
        console.log(item);
        const index = items.indexOf(item);
        items.splice(index, 1);
    }
    const toggleComplete = (item) => {
        item.completed = !item.completed;
        if (item.completed) {
            setTimeout(() => {
                removeItem(item)
            }, 2000);
        }
    }

    return {
        items,
        addItem,
        removeItem,
        toggleComplete,
        newItemText,
        categories,
    }
}
export const useStoreItem = storeItem();